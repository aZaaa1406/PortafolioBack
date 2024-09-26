import { Router } from 'express';
const router = Router();

router.get('/', (req, res)=> {
    res.render('index')

})

router.post("/register", (req,res)=>{
    console.log(req.body);
    req.flash('user', req.body);

    res.redirect('/profile')
})

router.get('/profile', (req,res)=>{
    const user = req.flash('user')[0];
    res.render('profile', {
        user
    }
    )
})

export default router