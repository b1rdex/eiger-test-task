## Finding a Common Prefix Length

> Given a string, split the string into two substrings at every possible point. The rightmost substring is a suffix.
The beginning of the string is the prefix. Determine the lengths of the common prefix between each suffix and the original string.
Sum and return the lengths of the common prefixes. Return an array where each element i is the sum for string i.

The task solution function `commonPrefix` is in file `commonPrefix.js`.

There are some tests provided in `commonPrefix.spec.ts` that can be run using command `node commonPrefix.spec.js`.

Also, there is a CLI tool that was described in the full task text:
1. it reads tests count `N`
2. then it reads `N` lines
3. then it prints computation result.

The CLI tool can be invoked as `node index.js` to be run interactively.

Example of CLI tool usage (using `cat` instead of input file):
```shell
cat <<EOF | node index.js
3
abcabcd
ababaa
aa
EOF
# outputs 24
```
