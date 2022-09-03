import React from "react";
import {
  Layout,
  Avatar,
  Link,
  Paragraph,
  Container,
  Card,
  CardAction
} from "../components";
import spacing from "../const/spacing";

const WithoutUsersOnRange = () => {
  return (
    <Container
      style={{ minHeight: "500px" }}
      justifyContent="center"
      alignItens="center"
    >
      <Avatar
        alt="Foto de perfil"
        img="https://spinoff.com.br/entrete/wp-content/uploads/2021/10/Bruna-Marquezine-nova-fotos.jpg"
        size="small"
      />
      <Container textAlign="center">
        <Paragraph style={{ margin: spacing.large }}>
          No momento não há pessoas <br />
          por perto...
        </Paragraph>
        <Link to={"/config"} variant="secondary">
          ir para as configurações
        </Link>
      </Container>
    </Container>
  );
};

export default function IndexPage() {
  const users = [
    {
      name: "Ex do neymar",
      age: 26,
      description: "O melhor de todos. Receba !!!!",
      picture:
        "https://s2.glbimg.com/2AdLSDwXbYiUBxqXF0qHAlPjfio=/e.glbimg.com/og/ed/f/original/2022/08/30/fotojet_1.jpg"
    }
  ];
  return (
    <Layout>
      {users.length > 0 ? (
        <>
          <Card profile={users[0]} />
          <CardAction />
        </>
      ) : (
        <WithoutUsersOnRange />
      )}
    </Layout>
  );
}
