import { JSX } from "react"

import { useTranslation } from "react-i18next"
import { Link, useParams } from "react-router-dom"

import { UserPostItem } from "./containers"

import { Flex } from "@/components/layouts"
import { Icon, List, Text } from "@/components/ui"
import { PAGE_URLS } from "@/lib/constants"
import { selectPostsByUserId } from "@/stores/slices"
import { useAppSelector } from "@/stores/store"

const UserPostsPage = (): JSX.Element => {
  const { t } = useTranslation()
  const { userId } = useParams<{ userId: string }>()
  const userPost = useAppSelector(selectPostsByUserId(userId))

  const handleDeletePost = (postId: number) => {
    alert(postId)
  }


  const handleEditPost = (postId: number) => {
    alert(postId)
  }

  return (
    <div className="fade-in">
      {/* Title */}
      <Flex gap="2" align="center" className="mb-3">
        <Link to={PAGE_URLS.HOME}>
          <Icon name="arrow_back" className="round-hover mt-1" />
        </Link>

        <Text size="4">
          {t("Users.Item", { id: userId })}
        </Text>
      </Flex>

      {/* List */}
      <List
        items={userPost}
        renderItem={(post, index) => (
          <div className="list-group-item" key={index}>
            <UserPostItem
              post={post}
              handleDelete={handleDeletePost}
              handleEdit={handleEditPost}
            />
          </div>
        )}
      />
    </div>
  )
}

export default UserPostsPage