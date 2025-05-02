
export const formdata ={
    Studentform :{
        labels : ["Id","Name","Age","Email","Class"],
        fields:[
            {id:"id",name:"id",placeholder:"enetr serial number",type:"number"},
            {id:"username",name:"username",placeholder:"enter name",type:"text"},
            {id:"age",name:"age",placeholder:"enter age",type:"number"},
            {id:"email",name:"email",placeholder:"enter email",type:"email"},
            {id:"class",name:"class",placeholder:"enter class",type:"text"},
        ]

    },

    Staffform:{
        labels : ["Id","Name","Age","Role","Class","Email"],
        fields:[
            {id:"id",name:"id",placeholder:"enetr serial number",type:"number"},
            {id:"username",name:"username",placeholder:"enter name",type:"text"},
            {id:"age",name:"age",placeholder:"enter age",type:"number"},
            {id:"Role",name:"Role",placeholder:"enter Role",type:"text"},
            {id:"class",name:"class",placeholder:"enter class",type:"text"},
            {id:"email",name:"email",placeholder:"enter email",type:"email"},
        ]


    },

    Subjectform : {
        labels : ["Id", "Subject Name", "Class"],
        fields : [
            {id : "id", name : "id", placeholder : "enter serial Number", type: "number"},
            {id : "subjectname", name : "subjectname", placeholder : "enter subject", type: "text"},
            {id : "class", name : "class", placeholder : "enter class", type: "text"},
        ]
    }
}

