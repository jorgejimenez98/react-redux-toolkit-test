/* eslint-disable no-unused-vars */
import React from "react"

import { Flex } from "@/components/layouts"
import { Icon, Text } from "@/components/ui"
import { Post } from "@/lib/interfaces"

interface UserPostItemProps {
    post: Post
    handleEdit: (id: number) => void
    handleDelete: (id: number) => void
}

const UserPostItem: React.FC<UserPostItemProps> = props => {
  const { post, handleEdit, handleDelete } = props

  const handleDeleteClick = () => {
    // TODO: add Confirm
    handleDelete(post.id)
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
            name="edit"
            className="round-hover text-primary"
            role="button"
            onClick={() => handleEdit(post.id)}
          />

          {/* Delete */}
          <Icon
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