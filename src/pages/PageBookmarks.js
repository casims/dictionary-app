import { APP_TITLE } from "../globals/Globals";
import { useEffect } from "react";
import { useSelector } from "react-redux";

// Components
import BookmarkItem from "../components/BookmarkItem";

// Utilities
import isBookmarked from "../utilities/isBookmarked";

function PageBookmarks() {

  useEffect(() => {
    document.title = `${APP_TITLE} - Bookmarks`;
  }, []);

  const bookmarks = useSelector((state) => state.bookmarks.items);

  return(
    <>
      {bookmarks.length < 1 ? (
        <section className="content-card bookmarks-card">
          <p>
            Sorry, but you currently have no bookmarks.
          </p>
        </section>
      ) : (
        <section className="bookmarks-section">
        <ul>
          {bookmarks.map((bookmark) => (
            <BookmarkItem
              key={bookmark}
              word={bookmark}
              isBookmarked={isBookmarked(bookmarks, bookmark)}
            />
          ))}
        </ul>
      </section>
      )}
    </>
  );
};

export default PageBookmarks;