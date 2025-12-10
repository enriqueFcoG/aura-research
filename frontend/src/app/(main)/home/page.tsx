import UserProfileCard from "@/components/UserProfileCard"
import UserTable from "@/components/UserTable"
import { getCurrentUser, getUsers } from "@/services/users.service"

const Home = async () => {
    const [user, users] = await Promise.all([getCurrentUser(), getUsers()]);
        
    return (
        <div className="p-6 space-y-6">
      {user && <UserProfileCard user={user} />}
      <UserTable users={users ?? []} />
    </div>
    )
}

export default Home