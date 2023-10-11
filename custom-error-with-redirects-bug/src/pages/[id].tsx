import { GetServerSideProps } from "next";

export default function Home({id} : {id: string}) {
  return (
    <main>
      <div>This page should not be visible because an error is thrown in
        getServerSideProps</div>
      <div>id: {id}</div>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  throw new Error("Server Error");
  return {
    props: {
      id: context.params?.id,
    },
  };
};
