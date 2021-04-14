import {
  PaymentSourceBrandIcon,
  PaymentSourceBrandName,
  PaymentSourceDetail,
  PaymentSourceEditButton,
} from "@commercelayer/react-components"
import { Fragment } from "react"
import { Trans, useTranslation } from "react-i18next"
import "twin.macro"

interface Props {
  hasEditButton?: boolean
}

export const PaymentDetails: React.FC<Props> = ({ hasEditButton = false }) => {
  const { t } = useTranslation()

  return (
    <Fragment>
      <div className="flex flex-row items-center">
        <PaymentSourceBrandIcon className="mr-2" />
        <Trans t={t} i18nKey="stepPayment.endingIn">
          <PaymentSourceBrandName className="mr-1" />
          <PaymentSourceDetail className="ml-1" type="last4" />
        </Trans>
      </div>
      <div className="ml-3 text-gray-500">
        <PaymentSourceDetail type="expMonth" />
        /
        <PaymentSourceDetail type="expYear" />
      </div>
      {hasEditButton && (
        <div className="ml-3">
          <PaymentSourceEditButton
            label={t("general.edit")}
            className="text-blue-500 hover:underline hover:text-blue-600"
          />
        </div>
      )}
    </Fragment>
  )
}