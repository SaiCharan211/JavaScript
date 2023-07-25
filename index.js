let list1=["Arjun","Adwait","Swapnil","Amit","Vishal","Adnan"]

let list2=["Adwait", "Laxman","Amit","Adnan","Nitin","Gaurav"]

const a= list1.filter(name =>!list2.includes(name))
console.log(a)

const b=list2.filter(name=>!list1.includes(name))
console.log(b)

const c=list1.filter(name=> list2.includes(name))
console.log(c)
