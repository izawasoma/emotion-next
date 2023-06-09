import { css } from "@emotion/react";

const styleLink = css({
    color: "red",
    border: "solid red 1px"
});

const Home = () => {
    return (
        <>
            <h2>Home</h2>
            <p>これはHomeです</p>
            <ul>
                <li css={styleLink}>テスト</li>
                <li css={styleLink}>テスト</li>
            </ul>
        </>
    )
}

export default Home;