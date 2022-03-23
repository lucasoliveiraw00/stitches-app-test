import { AlertDialog } from '../../../../components/alert-dialog';

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
  </div>
);

export { Home };
