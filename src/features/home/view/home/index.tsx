import { AlertDialog } from '../../../../components/alert-dialog';
import { Dialog } from '../../../../components/dialog';
import { StyledFieldset, StyledInput, StyledLabel } from './styled-components';

const Home = () => (
  <div>
    <AlertDialog
      triggerButtonName="Excluir Conta"
      cancelButtonName="Cancelar"
      confirmButtonName="Ok, Excluir"
      title="Você tem certeza absoluta?"
      description="Essa ação não pode ser desfeita. Isso excluirá permanentemente seu
              conta e remover seus dados de nossos servidores."
    />
    <Dialog
      title="Editar Perfil"
      description="Faça as alterações no seu perfil aqui. Clique em salvar quando terminar."
      confirmButtonName="Salvar alterações"
      confirmButtonType="info"
      triggerButtonName="Editar Perfil"
    >
      <StyledFieldset>
        <StyledLabel htmlFor="name">Name</StyledLabel>
        <StyledInput id="name" defaultValue="Pedro Duarte" />
      </StyledFieldset>
      <StyledFieldset>
        <StyledLabel htmlFor="username">Username</StyledLabel>
        <StyledInput id="username" defaultValue="@peduarte" />
      </StyledFieldset>
    </Dialog>
  </div>
);

export { Home };
