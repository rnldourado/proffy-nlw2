const Database = require('./db');
const createProffy = require('./createProffy');


Database.then(async (db) => {
    //Inserir dados

     ProffyValue = {
        name: "Raniel Dourado",
        avatar: "https://instagram.flec1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/106247930_726561634760098_2082147317041571526_n.jpg?_nc_ht=instagram.flec1-1.fna.fbcdn.net&_nc_ohc=kQPq3kY5m5sAX9SGbqb&oh=26ffb2feda953f6e5ec92310d94d4c50&oe=5F9753ED",
        whatsapp: "74999147251",
        bio: "Entusiasta das melhores tecnologias de química avançada.Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões."

    };

     ClassValue = {
        subject: 1,
        cost: "70,00", 
     //o proffy_id virá pelo banco de dados
    };

    ClassScheduleValues = [
        //class_id virá pelo banco de dados após cadastrar a aula
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220,
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220,
        }
    ];

    //await createProffy(db, {ProffyValue, ClassValue, ClassScheduleValues});

    //todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys");
    //console.log(selectedProffys)
    //consultar as classes de um professor específico e trazer junto os dados do professor

    const selectClassessAndProffys =  await db.all(`
        SELECT classes.*,proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;

    `)
    //console.log(selectClassessAndProffys)

    // O horário que a pessoa trabalha, por exemplo, é das 8h - 18h
    //o horário do time-from (8h) precisa ser antes ou igual ao horário solicitado
    //o time_to precisa ser acima

    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = 1
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "520"
        AND class_schedule.time_to <= "520"
    `)

    console.log(selectClassesSchedules)

});