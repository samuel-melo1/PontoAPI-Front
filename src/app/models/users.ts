import { Cargo } from "./cargo";
import { Departamento } from "./departamento";
import { Permissoes } from "./permissoes";

export interface Users{
    id?: any;
    name: string; 
    cpf: string; 
    email: string;
    password: string; 
    telefone: string; 
    cargo: Cargo; 
    departamento: Departamento; 
    permissions: Permissoes[]; 
}