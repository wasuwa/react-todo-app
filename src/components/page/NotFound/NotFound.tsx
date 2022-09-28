import { Wrapper } from "../../../common/utils/wrapper"
import { Header } from "../../ui/Header/Header"

export const NotFound = () => {
  return (
    <Wrapper>
      <Header />
      <main>
        <p>ページが見つかりません</p>
      </main>
    </Wrapper>
  )
}
