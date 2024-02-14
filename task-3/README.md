## Turning a single consumer web-based Platforms into a SaaS

Give a short, clear explanation for every question below:
> 1. How can we design the system in a way that every Company will be able to serve games on their gaming site from their domain?

First of all, we should add a new database table `domains` to persist clients' domains:
```sql
create table domains (
    id int primary key auto_increment,
    domain varchar(255) not null
    -- more columns can be added, like `is_enabled (bool)` to add ability to disable client's domain
)
```

Then, we should add an interface to back-office for adding/updating clients' domains and subscriptions. The system may also automatically disable domains when the subscription is not prolonged.

Next step, we should implement domain-based routing to distinguish users between clients' sites. This way, our clients can point their own domains to our gPlatform using dns `A/AAAA` or `CNAME` records. `CNAME` is preferable, because it'll help to abstract our backend cluster(s) handling requests.

> 2. What modification should be done to the users table at gPlatform to support this change?

1. First of all, the unique key on the `email` column should be removed.
2. Then, there should be added a new column for domain identification (e.g. `domain_id`) – it's a `domain.id` reference.
3. Last step: there should be created a new unique key (e.g. `(domain_id, email)`) to make users' email addresses unique in the scope of one domain.

> 3. Considering we have 1 backend cluster that serves all companies, how can we validate a user login on one gaming domain in such a way that it does not give access to a different gaming domain? (i.e. authenticating on site A, grants access to site A only)

The authentication token should be scoped to an exact domain. This way, authentication request must have `domain` field set (the `domain` can be set automatically based on the request's headers) so the system can validate if it's a valid and active client site.

If authentication token session is stored on the backend, then the system should write `domain` into it and validate it on each request.

Also, authentication token can be stored on the client side (using JWT for example). This requires adding `domain` into JWT contents and signing the payload.
