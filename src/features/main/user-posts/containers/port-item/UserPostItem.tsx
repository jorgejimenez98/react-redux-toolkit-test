/* eslint-disable no-unused-vars */
import React from "react"

import { useTranslation } from "react-i18next"

import { Flex } from "@/components/layouts"
import { Icon, Text } from "@/components/ui"
import { usePlugins } from "@/hooks"
import { Post } from "@/lib/interfaces"

interface UserPostItemProps {
    post: Post
    handleEdit: (post: Post) => void
    handleDelete: (id: number) => void
}

const UserPostItem: React.FC<UserPostItemProps> = props => {
  const { post, handleEdit, handleDelete } = props

  const { t } = useTranslation()
  const { confirm } = usePlugins()

  const handleDeleteClick = () => {
    confirm({
      title: t("Posts.Delete"),
      message: t("Posts.SureDelete"),
      onAccept: () => handleDelete(post.id)
    })
  }

  return (
    <Flex justify="between" gap="3" xsdir="col" className="py-2">
      <Flex direction="col" gap="1">
        {/* Title */}
        <Text size="6" weight="bold">
          {post.title}
        </Text>

        {/* Body */}
        <Text size="6" type="muted" tag="small">
          {post.body}
        </Text>
      </Flex>

      {/* Actions */}
      <Flex justify="center" align="center" className="justify-sm-end">
        <Flex gap="2">
          {/* Edit */}
          <Icon
            data-testid="edit-button"
            name="edit"
            className="round-hover text-primary"
            role="button"
            onClick={() => handleEdit(post)}
          />

          {/* Delete */}
          <Icon
            data-testid="delete-button"
            name="delete"
            className="round-hover text-danger"
            role="button"
            onClick={handleDeleteClick}
          />
        </Flex>
      </Flex>
    </Flex>
  )
}

export default UserPostItem