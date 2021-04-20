export default function TitleName({ title }) {
    return (
        <div class="flex place-items-center mx-7">
            <span class="font-bold pl-3 pr-5 py-2 text-3xl min-w-max">{title}</span>
            <hr class="border-2 border-red-500 w-full mr-4" />
        </div>
    );
}
