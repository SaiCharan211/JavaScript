let List1=["Arjun","Adwait","Swapnil","Amit","Vishal","Adnan"]

let List2=["Adwait", "Laxman","Amit","Adnan","Nitin","Gaurav"]

const a= List1.filter(name =>!List2.includes(name))
console.log(a)

const b=List2.filter(name=>!List1.includes(name))
console.log(b)

const c=List1.filter(name=> List2.includes(name))
console.log(c)