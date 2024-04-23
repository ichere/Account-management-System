// import { MdOutlineAdd } from "react-icons/md"
import PageHeader from "../components/PageHeader"
import PageWrapper from "../components/PageWrapper"
// import { BUTTON_ICON_SIZE, TAB_BREAKPOINT } from "../constants/appConstants"
// import { LargeBtn } from "../components/LargeBtn"
import { PageTitle, useDocumentTitle } from "../utils/pageTitle"
// import { Box, Image } from "@chakra-ui/react"
// import EmptyImage from "../assets/image/emptyState.png"


const ProfilePage = () => {
  useDocumentTitle(PageTitle.Profile);
  return (
    <PageWrapper  heading={"Welcome to your Profile"} subHeading={"profiles"} >
      {/* <PageHeader
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
        <Box>
          <Image src={EmptyImage} width={['13rem', '13rem', '30rem']} />
        </Box>
      </PageHeader> */}
      <PageHeader text={"Create Profile"} loading={false} header={"Profiles"}>

      </PageHeader>
    </PageWrapper>
  )
}

export default ProfilePage