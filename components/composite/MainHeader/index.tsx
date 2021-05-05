import { useTranslation } from "react-i18next"
import styled from "styled-components"
import tw from "twin.macro"

interface Props {
  order: number
}

export const MainHeader: React.FC<Props> = ({ order }) => {
  const { t } = useTranslation()

  return (
    <Wrapper>
      <Title>Checkout</Title>
      <Order>#{order}</Order>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  ${tw`flex flex-row border-b justify-between items-center pb-2`}
`
const Title = styled.h1`
  ${tw`font-semibold text-3xl`}
`
const Order = styled.p`
  ${tw`font-semibold text-base text-gray-500`}
`