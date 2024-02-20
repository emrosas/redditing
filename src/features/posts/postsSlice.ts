import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface Post {
  data: {
    id: string;
    title: string;
    subreddit_name_prefixed: string;
    created_utc: number;
    selftext: string;
    thumbnail: string;
    num_comments: number;
  };
}

interface PostsState {
  posts: Post[];
  status: "idle" | "loading" | "failed";
  error: string | null;
}

const initialState: PostsState = {
  posts: [],
  status: "idle",
  error: null,
};

export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async (subreddit: string) => {
    const response = await fetch(`https://www.reddit.com/r/${subreddit}.json`);
    const data = await response.json();
    return data.data.children as Post[];
  }
);

export const searchPosts = createAsyncThunk(
  "posts/searchPosts",
  async (query: string) => {
    const response = await fetch(
      `https://www.reddit.com/search.json?q=${query}`
    );
    const data = await response.json();
    return data.data.children as Post[];
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "idle";
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error =
          action.error.message?.toString() || "Something went wrong";
      })
      .addCase(searchPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(searchPosts.fulfilled, (state, action) => {
        state.status = "idle";
        state.posts = action.payload;
      })
      .addCase(searchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error =
          action.error.message?.toString() || "Something went wrong";
      });
  },
});

export default postsSlice.reducer;
