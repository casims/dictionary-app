import { APP_TITLE } from "../globals/Globals";
import { useSelector } from "react-redux";
import BookmarkItem from "../components/BookmarkItem";
import isBookmarked from "../utilities/isBookmarked";
import { useEffect } from "react";

function PageBookmarks() {

  useEffect(() => {
    document.title = `${APP_TITLE} - Bookmarks`;
  }, []);

  const bookmarks = useSelector((state) => state.bookmarks.items);

  return(
    <>
      {bookmarks.length < 1 ? (
        <section className="info-card">
          <p>
            Sorry, but you currently have no bookmarks.
          </p>
        </section>
      ) : (
        <section>
        <ul>
          {bookmarks.map((bookmark) => (
            <BookmarkItem
              key={bookmark}
              word={bookmark}
              isBookmarked={isBookmarked}
            />
          ))}
        </ul>
      </section>
      )};
    </>
  );
};

export default PageBookmarks;