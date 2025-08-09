import { Card } from "@/components/ui/card";
import { Fragment, MessageRole, MessageType } from "@/generated/prisma"
interface MessageCardProps {
    content:string;
    role:MessageRole;
    fragment :Fragment | null;
    createdAt:Date;
    isActiveFragment:boolean;
    onFragmentClick:(fragment:Fragment)=>void;
    type:MessageType
}

interface UserMessageProps {
    content:string;
}

export const MessageCard =({content,role,fragment,createdAt,isActiveFragment,onFragmentClick,type}:MessageCardProps)=>{
     
    if(role==="ASSISTANT")
        {return (<p>ASSISTANT</p>)}
    return(
        <UserMessage content={content}/>
    )

       
}

const UserMessage=({content}:UserMessageProps)=>{
return (
    <div className="flex justify-end pb-4 pr-2 pl-10">
        <Card className="rounded-lg bg-muted p-3 shadow-none  border-none max-w-[80%] break-words">{content}</Card>

    </div>
)
}