import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function SearchBar() {
  return (
    <div className="flex mt-4 items-center space-x-2">
      <Input type="text" className="px-3 py-2 min-w-12" placeholder="Digite o que Procura..." />
      <Button className="px-3 py-2 min-w-10 ">Procurar</Button>
    </div>
  )
}
