const {Ticket} = require('../models/models')
const ApiError = require('../error/ApiError')

class TicketController {
    async create(req, res, next) {
        try {
            const {numPlat, date, ls, sum, pok1, numFilial, numOperatora, numTicket, sumKomissii, pok2} = req.body
            const ticket = await Ticket.create({numPlat,date,ls,sum,pok1, numFilial,numOperatora,numTicket,sumKomissii,pok2})
            return res.json(ticket)
        }catch (e){
            next(ApiError.badRequest(e.message))
        }

    }

    async getAll(req, res) {
        const {numOperatora}=req.query
        let ticket;
        if (!numOperatora){
            ticket = await Ticket.findAll()
        }
        if(numOperatora){
            ticket = await Ticket.findAll({where:{numOperatora}})
        }
        return res.json(ticket)

    }

    async getOne(req, res) {
            const {ls} = req.params
            const ticket = await  Ticket.findOne(
                {where:{ls}}
            )
        return res.json(ticket)
    }

    async delete(req, res,next) {
        try{
            const {id} = req.params
            if(!id){
                next(ApiError.badRequest(e.message))
            }
            const ticket = await Ticket.destroy(
                {where:{id}, force:true}
            )
            return res.json(ticket)
        }catch(e){
            next(ApiError.badRequest(e.message))

    }
}
}


module.exports = new TicketController()