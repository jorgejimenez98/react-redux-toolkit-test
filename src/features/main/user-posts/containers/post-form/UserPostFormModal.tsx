/* eslint-disable no-unused-vars */
import React from "react"

import { Form, Formik } from "formik"
import { useTranslation } from "react-i18next"

import { Button, Divider, Modal } from "@/components/ui"
import { TextArea, TextInput } from "@/components/ui/_fields"
import { postFormSchema } from "@/lib/form-options"
import { Post, PostFormPayload } from "@/lib/interfaces"

interface UserPostFormModalProps {
    data: Post
    visible: boolean
    handleClose: () => void
    handleSubmit: (values: Post) => void
}

const UserPostFormModal: React.FC<UserPostFormModalProps> = props => {
  const { visible, data, handleClose, handleSubmit } = props

  const { t } = useTranslation()

  return (
    <Modal
      title={t("Posts.EditPost")}
      visible={visible}
      handleClose={handleClose}
    >
      {/* Form */}
      <Formik
        initialValues={{ title: data.title, body: data.body }}
        validationSchema={postFormSchema(t)}
        onSubmit={(values: PostFormPayload) => handleSubmit({ ...data, ...values })}
      >
        <Form>
          {/* Title */}
          <TextInput
            label={t("Posts.Title")}
            placeholder={t("Posts.Title")}
            alias="title"
            name="title"
            autoFocus
          />

          {/* Body */}
          <TextArea
            className="mt-3"
            placeholder={t("Posts.Body")}
            label={t("Posts.Body")}
            alias="body"
            name="body"
          />

          <Divider className="mt-3 mb-4" />

          {/* Submit */}
          <Button
            type="submit"
            text={t("General.Edit")}
            variant="warning"
            block
          />
        </Form>
      </Formik>
    </Modal>
  )
}

export default UserPostFormModal