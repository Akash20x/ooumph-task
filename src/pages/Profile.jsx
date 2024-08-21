import ProfileDetails from "../components/ProfileDetails"
import ProfileGrid from "../components/ProfileGrid"
import SendVibes from "../components/SendVibes"
import Vibes from "../components/Vibes"
import VibeTags from "../components/VibeTags"

const Profile = () => {
  return (
    <div className="mx-20 w-full relative h-screen">
      <Vibes />
      <ProfileDetails />
      <SendVibes />
      <VibeTags />   
      <ProfileGrid />
    </div>
  )
}

export default Profile
