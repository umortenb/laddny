import { Trans } from "@lingui/react";
import Link from "next/link";
import BlockComponent from "../components/BlockComponent";
import TextContentComponent from "../components/TextContentComponent";
import { getIntl } from "../lib/i18n";
import { Block } from "../models/block";

const testBlock: Block = {
  _id: "test",
  subBlockInfo: {
    direction: "column",
    blocks: [
      { _id: "test1", content: "test1" },
      {
        _id: "subBlock",
        subBlockInfo: {
          direction: "row",
          blocks: [
            { _id: "test2", content: "test2" },
            { _id: "test3", content: "test3" },
          ],
        },
      },
    ],
  },
};
const HomePage = () => {
  return (
    <>
      <TextContentComponent content={"test"} />
      <Trans id="Test" />
      <Link href="/" locale="en-US">
        EN
      </Link>
      <Link href="/" locale="de-DE">
        DE
      </Link>
      <BlockComponent block={testBlock} />
    </>
  );
};

export default HomePage;

export async function getStaticProps(context) {
  const messages = await getIntl(context.locale);

  return {
    props: {
      messages,
    },
  };
}
