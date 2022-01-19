/*
const proffys = [
    {
     name: "Diego Fernandes",
     avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
     whatsapp: "898923829",
     bio: "Entusiasta das melhores tecnologias de química avançada.Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
     subject: "Química",
     cost: "20,00", 
     weekday: [0],
     time_from: [720],
     time_to: [1220]
    },
    {
     name: "Raniel Dourado",
     avatar: "https://instagram.flec1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/106247930_726561634760098_2082147317041571526_n.jpg?_nc_ht=instagram.flec1-1.fna.fbcdn.net&_nc_ohc=kQPq3kY5m5sAX9SGbqb&oh=26ffb2feda953f6e5ec92310d94d4c50&oe=5F9753ED",
     whatsapp: "74999147251",
     bio: "Entusiasta das melhores tecnologias de química avançada.Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
     subject: "Algoritmos",
     cost: "70,00", 
     weekday: [0],
     time_from: [720],
     time_to: [1220]
    }
];








const ProffyValue = {
    name: req.body.name,
    avatar:req.body.avatar,
    whatsapp: req.body.whatsapp,
    bio: req.body.bio
}

const ClassValue = {
    subject: req.body.subject,
    cost: req.body.cost
}

const ClassScheduleValues = req.body.weekdays.map((weekday, index) => {

    return {
        weekday,
        time_from: convertHoursToMinutes(req.body.time_from[index]),
        time_to: convertHoursToMinutes(req.body.time_to[index])
    }

})

try{
    const db = await Database
    await createProffy(db, {ProffyValue, ClassValue, ClassScheduleValues})

    let queryString = "?subject=" + req.body.subject
    queryString += "&weekday=" + req.body.weekday[0]
    queryString += "&time=" + req.body.time_from[0]

    return res.redirect("/study" + queryString)

}catch(error) {
    console.log(error)
}



*/


return res.redirect("/study")