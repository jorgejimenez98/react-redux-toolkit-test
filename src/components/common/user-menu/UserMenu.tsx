import React from "react"

import { redirect } from "react-router-dom"

import { Dropdown } from "@/components/ui"
import { useLocalStorage } from "@/hooks"
import { ENV, PAGE_URLS } from "@/lib/constants"
import { selectCurrentUser, setUser } from "@/stores/slices"
import { useAppDispatch, useAppSelector } from "@/stores/store"

const UserMenu: React.FC = () => {
  const user = useAppSelector(selectCurrentUser)
  const dispatch = useAppDispatch()
  const { removeItem: removeLocalStorageUser } = useLocalStorage(ENV.USER_LOCALSTORAGE_KEY)

  const handleLogout = () => {
    // TODO: Add backend api call

    removeLocalStorageUser()
    dispatch(setUser(null))
    redirect(PAGE_URLS.LOGIN)
  }

  return (
    <Dropdown text={user?.email || ""}>
      <span
        className="dropdown-item pointer"
        onClick={handleLogout}
      >
        {"Logout"}
      </span>
    </Dropdown>
  )
}

export default UserMenu