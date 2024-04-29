import { MdOutlineAdd } from "react-icons/md"
import PageHeader from "../components/PageHeader"
import PageWrapper from "../components/PageWrapper"
import { BUTTON_ICON_SIZE, TAB_BREAKPOINT } from "../constants/appConstants"
import { LargeBtn } from "../components/LargeBtn"
import { PageTitle, useDocumentTitle } from "../utils/pageTitle"


const ProfilePage = () => {
  useDocumentTitle(PageTitle.Profile);
  return (
    <PageWrapper  heading={"Welcome to your Profile"} subHeading={"profiles"} >
      <PageHeader
        header="Profiles"
        loading={false}
        btn={true}
        text="Create Profile"
        modalHeader="Add Profile"
        size="4xl"
        childComp={
          window.innerWidth >= TAB_BREAKPOINT ? <MdOutlineAdd size={BUTTON_ICON_SIZE} /> : undefined
        }
        modalChildren={<LargeBtn text="Add Order" bg={""} color={""} loading={false} />}
      >
      </PageHeader>

    </PageWrapper>
  )
}

export default ProfilePage