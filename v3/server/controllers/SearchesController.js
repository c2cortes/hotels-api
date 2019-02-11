const { Room } = require('../models/room');

exports.searchAvailableRooms = (req, res) => {
    Room.find()
        .sort({ _id: -1 })
        .then((rooms) => {
            const response = {
                status: rooms ? 'Ok' : 'Error',
                message: rooms ? '' : 'Error',
                data: []
            };
            
            if(req.body.checkin && req.body.checkout){
                const checkin = req.body.checkin + 'T14:00:00.171Z';
                const checkout = req.body.checkout + 'T12:00:00.171Z';

                rooms.map((room) => {
                    let ableToAdd = true;
                    room.reservations.map((r) => {
                        if ((r.checkin <= checkin && r.checkout >= checkin) || (r.checkin <= checkout && r.checkout >= checkout)) {
                            ableToAdd = false;
                        }
                    })
                    ableToAdd ? response.data.push({ 'name': room.name, 'description': room.description, 'price': room.price + room.currency, images: room.images }) : null;
                })
            }

            res.send(response)
        }, (e) => {
            res.send(e);
        })
}