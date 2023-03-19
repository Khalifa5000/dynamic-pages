    const express = require("express");
    const app = express();

    const port = process.env.PORT || 3000;
    
    const path = require ("path");
    const x = path.join(__dirname, "../public");
    app.use(express.static(x))


       app.set('view engine', 'hbs');

       const hbs = require ("hbs");
       const partialsPath = path.join (__dirname , "../partials")

       hbs.registerPartials(partialsPath)



       app.get('/', (req , res)=>{
        res.render('index' , {
            title: "Home",
            desc: "welcome to our page",
            img: "images/pic2.jpg",

        })
       })

       app.get('/services', (req , res)=>{
        res.render('services' , {
            title: "Services",
           job: "Full-stack web develeper",
           skills: "HTML , CSS , JAVASCRIPT , REACT.JS , NODE.JS , EXEPRESS.JS",
           img: "images/pic1.jpg",
           confirm: "facebook",
        })
       })

       app.get('/team', (req , res)=>{
        res.render('team' , {
            title: "Our Team",
           front: "Mohamed Khalifa",
           back: "Islam Mohamed",
           full: "Ahmed Ali",
           city: "Cairo - Egypt",
           contact: "002 01023730625",
           linkedIn: "Linked In Account"
        })
       })
   
       app.get('/websites', (req , res)=>{
        res.render('websites' , {
            title: "Our websites",
            website1: "First website",
            website2: "Second website",
            website3: "Third website",
            website4: "4th website",
            website5: "5th website",
        })
       })
   
       app.get('/about', (req , res)=>{
        res.render('about' , {
           title: "About me",
           name: "Mohamed Khalifa",
           age: "41",
            city: "Cairo",
           status: "Open to work",
           img: "images/DSC_1325.JPG",
           github: "Github link"
        })
       })


    app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
    });


  



   