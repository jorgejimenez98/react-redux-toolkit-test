import { JSX } from "react"

import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

import { Flex } from "@/components/layouts"
import { Icon, List, Loader, Text } from "@/components/ui"
import { PAGE_URLS } from "@/lib/constants"
import { useGetPostsQuery } from "@/services"
import { allUserPostsSelector } from "@/stores/slices"
import { useAppSelector } from "@/stores/store"

const HomePage = (): JSX.Element => {
  const { t } = useTranslation()
  const { isLoading } = useGetPostsQuery()
  const userPosts = useAppSelector(allUserPostsSelector)

  return (
    <div className="fade-in">
      <Text tag='h1'>
        {t("Home.Title")}
      </Text>

      {/* List */}
      {isLoading ? <Loader /> : (
        <List
          items={userPosts}
          renderItem={(userPost, index) => (
            /* Item */
            <Flex
              justify="between"
              align="center"
              className="list-group-item list-group-item-action py-3"
              key={index}
            >
              {/* Text */}
              <Text type="muted" size="5">
                {t("Users.Item", { id: userPost.userId })}
              </Text>

              {/* Posts */}
              <Flex gap="3" align="center" className="me-4">
                <Text type="muted">
                  {t("Users.Posts", { value: userPost.posts.length })}
                </Text>

                {/* Details Link */}
                <Link
                  to={`${PAGE_URLS.USER_POST}/${userPost.userId}`}
                  data-testid="redirect-link"
                >
                  <Icon name="visibility" className="round-hover mt-1" />
                </Link>
              </Flex>
            </Flex>
          )}
        />
      )}
    </div>
  )
}

export default HomePage