import { createSelector } from "reselect"

import { Post, UserPosts } from "@/lib/interfaces"
import { RootState } from "@/stores/store"

/* Selector to get all Users by Posts */
export const allUserPostsSelector = createSelector(
  (state: RootState) => state.posts.posts,
  (allPosts): UserPosts[] => {
    if (allPosts.length === 0) return []

    const postsByUser: Record<number, Post[]> = allPosts.reduce((acc, post) => {
      const { userId } = post
      if (!acc[userId]) {
        acc[userId] = []
      }

      acc[userId].push(post)

      return acc
    }, {} as Record<number, Post[]>)

    const result: UserPosts[] = Object.keys(postsByUser).map(userId => ({
      userId: +userId,
      posts: postsByUser[+userId]
    }))

    return result
  }
)


// Selector to filter posts by userId
export const selectPostsByUserId = (userId?: string) => createSelector(
  (state: RootState) => state.posts.posts,
  (posts): Post[] => {
    if (!userId) return []
    return posts.filter(post => post.userId === +userId)
  }
)