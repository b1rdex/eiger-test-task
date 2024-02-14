const Trades = require("../models/trades");

const createNewTrade = async (req, res) => {
    const data = req.body;
    if (data.id || data.shares < 1 || data.shares > 100 || !['buy', 'sell'].includes(data.type)) {
        return res.status(400).end();
    }

    const created = await Trades.create(data);

    res.status(201).json(created);
};

const getAllTrades = async (req, res) => {
    const where = {};
    const {type, user_id} = req.query;
    if (type) {
        where.type = type;
    }
    if (user_id) {
        where.user_id = user_id;
    }
    const list = await Trades.findAll({order: Trades.sequelize.col('id'), where: where});

    res.status(200).json(list);
};

const getTradeById = async (req, res) => {
    if (req.method !== 'GET') {
        return res.status(405).end();
    }

    const trade = await Trades.findByPk(req.params.id);
    if (null === trade) {
        return res.status(404).end('ID not found');
    }
    res.status(200).json(trade);
};

module.exports = {createNewTrade, getAllTrades, getTradeById};
