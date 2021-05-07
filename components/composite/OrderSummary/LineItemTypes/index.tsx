import {
  LineItem,
  LineItemImage,
  LineItemName,
  LineItemQuantity,
  LineItemAmount,
} from "@commercelayer/react-components"
import { LineItemType } from "@commercelayer/react-components/dist/typings"
import { useTranslation } from "react-i18next"
import styled from "styled-components"
import tw from "twin.macro"

interface Props {
  type: LineItemType
}

export const LineItemTypes: React.FC<Props> = ({ type }) => {
  const { t } = useTranslation()

  return (
    <LineItem type={type}>
      <LineItemWrapper>
        <LineItemImage width={75} className="p-1 bg-white border rounded" />
        <LineItemDescription>
          <LineItemTitle>
            <LineItemName className="font-bold" />
            <LineItemAmount className="text-lg font-extrabold" />
          </LineItemTitle>
          <LineItemQty>
            <LineItemQuantity>
              {(props) =>
                !!props.quantity &&
                t("orderRecap.quantity", { count: props.quantity })
              }
            </LineItemQuantity>
          </LineItemQty>
        </LineItemDescription>
      </LineItemWrapper>
    </LineItem>
  )
}

const LineItemWrapper = styled.div`
  ${tw`flex flex-row mb-7 pb-6 border-b`}
`
const LineItemDescription = styled.div`
  ${tw`pl-4 flex flex-col flex-1`}
`
const LineItemTitle = styled.div`
  ${tw`flex justify-between`}
`
const LineItemQty = styled.div`
  ${tw`text-xs uppercase mt-1 text-gray-400`}
`
