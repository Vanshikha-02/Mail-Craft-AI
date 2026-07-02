import { Brain, Zap, Mail } from "lucide-react";

const stats = [

{
icon:<Mail/>,
title:"1000+",
subtitle:"Emails Generated"
},

{
icon:<Brain/>,
title:"Groq AI",
subtitle:"Powered"
},

{
icon:<Zap/>,
title:"<1 sec",
subtitle:"Response Time"
}

];

export default function Stats(){

return(

<div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">

{

stats.map((item,index)=>(

<div

key={index}

className="glass p-8 text-center hover:-translate-y-2 transition"

>

<div className="text-blue-400 flex justify-center">

{item.icon}

</div>

<h2 className="text-3xl font-bold mt-4">

{item.title}

</h2>

<p className="text-gray-400">

{item.subtitle}

</p>

</div>

))

}

</div>

)

}