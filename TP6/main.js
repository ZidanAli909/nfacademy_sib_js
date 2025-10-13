import { index, store, destroy } from "./controller.js";

const main = () => {
    index();
    store({ nama: 'Data 11', umur: 30, alamat: 'Jl. Data 11', email: 'data11@example.com' });
    store({ nama: 'Data 12', umur: 31, alamat: 'Jl. Data 12', email: 'data12@example.com' });
    index();
    destroy('Data 11');
    index();
};

main();