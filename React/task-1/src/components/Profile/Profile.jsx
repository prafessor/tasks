import css from './Profile.module.css';

export default function Profile({
  name,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) {
  return (
    <div className={css.container}>
      <div className={css.mainWrapper}>
        <img className={css.img} src={avatar} alt="User avatar" />
        <p className={css.name}>{name}</p>
        <p className={css.info}>@{tag}</p>
        <p className={css.info}>{location}</p>
      </div>
      <ul className={css.list}>
        <li className={css.item}>
          <span>Followers</span>
          <span className={css.count}>{followers}</span>
        </li>
        <li className={css.item}>
          <span>Views</span>
          <span className={css.count}>{views}</span>
        </li>
        <li className={css.item}>
          <span>Likes</span>
          <span className={css.count}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
