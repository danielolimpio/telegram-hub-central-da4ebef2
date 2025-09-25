import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Send, Upload, Star, CheckCircle } from "lucide-react";

const SubmitGroup = () => {
  const categories = [
    "Vendas",
    "Renda Extra",
    "Marketing",
    "Investimento",
    "Empreendedores",
    "Afiliados",
    "Compra e Venda",
    "Tecnologia",
    "Educação",
    "Games",
    "Música",
    "Esportes",
    "Viagens",
    "Culinária",
    "Fotografia",
    "Namoro",
    "Outros"
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-gradient-telegram rounded-full flex items-center justify-center mx-auto mb-4">
            <Send className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Enviar Grupo para Telegram</h1>
          <p className="text-lg text-muted-foreground">
            Compartilhe seu grupo do Telegram com nossa comunidade
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Upload className="w-5 h-5 text-telegram-blue" />
                  <span>Informações do Grupo</span>
                </CardTitle>
                <CardDescription>
                  Preencha as informações do seu grupo do Telegram
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="groupName">Nome do Grupo *</Label>
                  <Input
                    id="groupName"
                    placeholder="Ex: Grupo de Marketing Digital"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="groupDescription">Descrição *</Label>
                  <Textarea
                    id="groupDescription"
                    placeholder="Descreva do que se trata seu grupo..."
                    rows={4}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="category">Categoria *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione uma categoria" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category} value={category.toLowerCase()}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="members">Número de Membros</Label>
                    <Input
                      id="members"
                      type="number"
                      placeholder="Ex: 150"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="telegramLink">Link do Telegram *</Label>
                  <Input
                    id="telegramLink"
                    placeholder="https://t.me/seugrupo"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="adminContact">Contato do Administrador</Label>
                  <Input
                    id="adminContact"
                    placeholder="@seuusuario ou email@exemplo.com"
                  />
                </div>

                <Button variant="telegram" size="lg" className="w-full">
                  <Send className="w-5 h-5 mr-2" />
                  Enviar Grupo
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Benefits */}
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-lg">
                  <Star className="w-5 h-5 text-telegram-blue" />
                  <span>Benefícios</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-sm">Mais Membros</div>
                    <div className="text-xs text-muted-foreground">Aumente o número de participantes</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-sm">Visibilidade</div>
                    <div className="text-xs text-muted-foreground">Apareça nas buscas</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-sm">Crescimento</div>
                    <div className="text-xs text-muted-foreground">Acelere o crescimento da comunidade</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Guidelines */}
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="text-lg">Diretrizes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>• O grupo deve estar ativo</p>
                <p>• Conteúdo deve ser apropriado</p>
                <p>• Não são permitidos grupos de spam</p>
                <p>• Respeitamos a privacidade dos membros</p>
                <p>• Moderação pode levar até 24h</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SubmitGroup;