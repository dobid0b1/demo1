const router = require("express").Router();

// ส่งตัวแปรแบบ ?
router.get('/', function (req, res) {
    const {dd} = req.query

    res.status(200).json({
        status: true,
        msg: 'Hello World',
    })
})

// ส่งตัวแปรแบบฟังก์ชั่น
router.get('/:id', (req, res) => {


    const {id, name} = req.params
    res.send(`id : ${id} ++ name : ${name}`)
})

router.post('/', (req, res) => {
    const { name } = req.body

    // if(name == 'b1') {
    //     res.status(200).json({
    //         status: true,
    //         message: `Success`,
    //         name
    //     })
    // }
    // else {
    //     res.status(500).json({
    //         status: false,
    //         message: `error`,
    //     })
    // }

    if(!name) return res.status(500).json({
        staus: false,
        msg: 'ไม่มีชื่อ'
    })

    if (name !== 'dobi') return res.status(500).json({
        staus: false,
        msg: 'Error'
    })

    res.status(200).json({
        status: true,
        msg: 'success'
    })

    
})

module.exports = router;