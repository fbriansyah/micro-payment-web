import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function Header() {

  const avatarOnClick = () => console.log('avatar')

  return (
    <div className="flex items-center">
      <h1 className="block text-4xl font-semibold text-primary">Payment Page</h1>
      <div className="ml-auto font-semibold flex items-center">
        <span className="inline-block text-green-500 mr-4">Rp 1.000.000</span>
        <Avatar onClick={avatarOnClick}>
          <AvatarFallback>AD</AvatarFallback>
        </Avatar>
      </div>
    </div>
  )
} 
