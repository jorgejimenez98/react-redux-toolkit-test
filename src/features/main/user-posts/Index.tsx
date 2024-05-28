import { JSX } from "react"

import toast from "react-hot-toast"
import { useTranslation } from "react-i18next"
import { Link, useParams } from "react-router-dom"

import { UserPostFormModal, UserPostItem } from "./containers"

import { Flex } from "@/components/layouts"
import { Icon, List, Text } from "@/components/ui"
import { useModal } from "@/hooks"
import { PAGE_URLS } from "@/lib/constants"
import { Post } from "@/lib/interfaces"
import { deletePost, selectPostsByUserId, editPost } from "@/stores/slices"
import { useAppDispatch, useAppSelector } from "@/stores/store"

const UserPostsPage = (): JSX.Element => {
  const { t } = useTranslation()
  const { userId } = useParams<{ userId: string }>()
  const dispatch = useAppDispatch()
  const userPosts = useAppSelector(selectPostsByUserId(userId))

  const { visible, closeModal, data, openModal } = useModal<Post>()

  const handleDeletePost = (postId: number) => {
    dispatch(deletePost(postId))
    toast.success(t("General.DeleteSuccess"))
  }

  const handleEditPost = (payload: Post) => {
    dispatch(editPost(payload))
    closeModal()
    toast.success(t("General.EditSuccess"))
  }

  return (
    <div className="fade-in">
      <Flex justify="between" gap="2" xsdir="col" align="center">
        {/* Title */}
        <Flex gap="2" align="center" className="mb-3">
          <Link to={PAGE_URLS.HOME}>
            <Icon name="arrow_back" className="round-hover mt-1" />
          </Link>

          <Text size="4">
            {t("Users.Item", { id: userId })}
          </Text>
        </Flex>

        {/* Posts */}
        <Text type="muted" size="5">
          {t("Users.Posts", { value: userPosts.length })}
        </Text>
      </Flex>

      {/* List */}
      <List
        items={userPosts}
        renderItem={(post, index) => (
          <div className="list-group-item" key={index}>
            <UserPostItem
              post={post}
              handleDelete={handleDeletePost}
              handleEdit={post => openModal(post)}
            />
          </div>
        )}
      />

      {/* Edit Form */}
      {(data && visible) && (
        <UserPostFormModal
          visible={visible}
          data={data}
          handleClose={closeModal}
          handleSubmit={handleEditPost}
        />
      )}
    </div>
  )
}

export default UserPostsPage