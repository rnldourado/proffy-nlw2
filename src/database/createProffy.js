module.exports = async function(db, {ProffyValue, ClassValue, ClassScheduleValues}){
    //Inserir dados na tabela de proffys
    const insertedProffy = await db.run(`
        INSERT INTO proffys(
            name,
            avatar,
            whatsapp,
            bio
        ) VALUES(
            "${ProffyValue.name}",
            "${ProffyValue.avatar}",
            "${ProffyValue.whatsapp}",
            "${ProffyValue.bio}"
        );
    `);

    const proffy_id = insertedProffy.lastID;

    //Inserir dados na tabela classes

    const insertedClass = await db.run(`
            INSERT INTO classes(
                subject,
                cost,
                proffy_id
            )VALUES(
                "${ClassValue.subject}",
                "${ClassValue.cost}",
                "${proffy_id}"
            );
    `);

    const class_id = insertedClass.lastID;

    //Inserir dados na tabela class_Schedule
    const insertedAllClassScheduleValues = ClassScheduleValues.map((ClassScheduleValue)=>{
        return db.run(`
            INSERT INTO class_schedule(
                class_id,
                weekday,
                time_from,
                time_to
            )VALUES(
                "${class_id}",
                "${ClassScheduleValue.weekday}",
                "${ClassScheduleValue.time_from}",
                "${ClassScheduleValue.time_to}"

            );
        
        `);
    });

    //aqui vou executar todos os db.runs() das class-Schedule
    await Promise.all(insertedAllClassScheduleValues)

};