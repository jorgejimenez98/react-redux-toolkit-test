import { JSX } from "react"

import { useTranslation } from "react-i18next"
import { Link, useParams } from "react-router-dom"

import { Flex } from "@/components/layouts"
import { Icon, Text } from "@/components/ui"
import { PAGE_URLS } from "@/lib/constants"

const UserPostPage = (): JSX.Element => {
  const { t } = useTranslation()
  const { userId } = useParams()

  return (
    <div className="fade-in">

      {/* Title */}
      <Flex gap="2" align="center">
        <Link to={PAGE_URLS.HOME}>
          <Icon name="arrow_back" className="round-hover mt-1" />
        </Link>

        <Text size="4">
          {t("Users.Item", { id: userId })}
        </Text>
      </Flex>

        Content here...
    </div>
  )
}

export default UserPostPage