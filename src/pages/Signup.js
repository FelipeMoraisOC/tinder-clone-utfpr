import React from "react";
import {
  Layout,
  Title,
  Input,
  Button,
  Link,
  Textarea,
  Select
} from "../components";
export default function SignupPage() {
  return (
    <Layout>
      <Title text="Faça o seu cadastro" size="medium" />

      <Input type="text" label="Nome" />
      <Input type="email" label="E-mail" />
      <Input type="date" label="Data de nascimento" />
      <Input type="text" label="Instagram" />
      <Select
        label="Preferência"
        options={[
          {
            label: "Masculino",
            value: "FEMALE"
          },
          {
            label: "Feminino",
            value: "FEMALE"
          },
          {
            label: "Todos",
            value: "ALL"
          }
        ]}
      />

      <Textarea label="Sobre você" />

      <Input type="password" label="Senha" />

      <Button text="Criar conta" />
      <Link to="/login" variant="secondary">
        ou faça login
      </Link>
    </Layout>
  );
}
