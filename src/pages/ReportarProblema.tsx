import { AlertTriangle, MessageCircle, Shield, Flag, Users, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ReportarProblema = () => {
  const reportTypes = [
    {
      value: "spam",
      label: "Spam ou Conteúdo Promocional Excessivo",
      icon: <MessageCircle className="w-4 h-4" />
    },
    {
      value: "inappropriate",
      label: "Conteúdo Inadequado ou Ofensivo",
      icon: <AlertTriangle className="w-4 h-4" />
    },
    {
      value: "scam",
      label: "Golpe ou Atividade Fraudulenta",
      icon: <Shield className="w-4 h-4" />
    },
    {
      value: "fake",
      label: "Informações Falsas ou Enganosas",
      icon: <Flag className="w-4 h-4" />
    },
    {
      value: "harassment",
      label: "Assédio ou Bullying",
      icon: <Users className="w-4 h-4" />
    },
    {
      value: "other",
      label: "Outro (especificar na descrição)",
      icon: <FileText className="w-4 h-4" />
    }
  ];

  const guidelines = [
    "Forneça informações detalhadas e precisas sobre o problema",
    "Inclua links ou evidências quando possível",
    "Seja respeitoso e objetivo na descrição",
    "Não faça denúncias falsas ou maliciosas",
    "Aguarde nossa análise antes de fazer nova denúncia do mesmo caso"
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <AlertTriangle className="w-16 h-16 text-red-500" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">Reportar Problema</h1>
          <p className="text-xl text-muted-foreground">
            Ajude-nos a manter a comunidade segura reportando problemas ou violações
          </p>
        </div>

        <Alert className="mb-8">
          <Shield className="h-4 w-4" />
          <AlertDescription>
            <strong>Sua denúncia é importante!</strong> Todas as denúncias são analisadas pela nossa equipe. 
            Manteremos sua identidade confidencial e você receberá um retorno sobre o status da análise.
          </AlertDescription>
        </Alert>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Formulário de Denúncia</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <form className="space-y-6">
                  {/* Personal Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome (opcional)</Label>
                      <Input id="name" placeholder="Seu nome" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail de contato</Label>
                      <Input id="email" type="email" placeholder="seu@email.com" required />
                    </div>
                  </div>

                  {/* Report Type */}
                  <div className="space-y-2">
                    <Label htmlFor="report-type">Tipo de Problema</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o tipo de problema" />
                      </SelectTrigger>
                      <SelectContent>
                        {reportTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            <div className="flex items-center space-x-2">
                              {type.icon}
                              <span>{type.label}</span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Group Link */}
                  <div className="space-y-2">
                    <Label htmlFor="group-link">Link do Grupo (se aplicável)</Label>
                    <Input 
                      id="group-link" 
                      placeholder="https://t.me/nomeDoGrupo ou link da página do grupo"
                    />
                  </div>

                  {/* Description */}
                  <div className="space-y-2">
                    <Label htmlFor="description">Descrição Detalhada</Label>
                    <Textarea
                      id="description"
                      placeholder="Descreva o problema em detalhes. Inclua quando aconteceu, evidências e qualquer informação relevante..."
                      className="min-h-[120px]"
                      required
                    />
                  </div>

                  {/* Evidence */}
                  <div className="space-y-2">
                    <Label htmlFor="evidence">Evidências (opcional)</Label>
                    <Input 
                      id="evidence" 
                      type="file" 
                      multiple 
                      accept="image/*,.pdf,.txt"
                      className="cursor-pointer"
                    />
                    <p className="text-xs text-muted-foreground">
                      Aceitos: imagens, PDF ou arquivos de texto (máx. 5MB cada)
                    </p>
                  </div>

                  {/* Priority */}
                  <div className="space-y-2">
                    <Label htmlFor="priority">Urgência</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione a urgência" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Baixa - Problema menor</SelectItem>
                        <SelectItem value="medium">Média - Problema moderado</SelectItem>
                        <SelectItem value="high">Alta - Problema sério</SelectItem>
                        <SelectItem value="urgent">Urgente - Situação perigosa</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Agreement */}
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" required />
                    <Label htmlFor="terms" className="text-sm">
                      Confirmo que as informações são verdadeiras e concordo com os{" "}
                      <a href="/termos" className="text-telegram-blue hover:underline">
                        Termos de Uso
                      </a>
                    </Label>
                  </div>

                  <Button type="submit" className="w-full bg-red-500 hover:bg-red-600">
                    <Flag className="w-4 h-4 mr-2" />
                    Enviar Denúncia
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Guidelines */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Diretrizes para Denúncia</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  {guidelines.map((guideline, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-telegram-blue rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{guideline}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* What Happens Next */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">O que acontece depois?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3 text-sm">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold">1</div>
                    <p className="text-muted-foreground">Recebemos sua denúncia e enviamos confirmação por e-mail</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold">2</div>
                    <p className="text-muted-foreground">Nossa equipe analisa o caso em até 48 horas</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold">3</div>
                    <p className="text-muted-foreground">Tomamos as medidas necessárias e informamos o resultado</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Outras Formas de Contato</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <strong className="text-sm">E-mail Emergencial:</strong>
                  <p className="text-sm text-muted-foreground">urgente@gruposdotelegram.com</p>
                </div>
                <div>
                  <strong className="text-sm">Telegram:</strong>
                  <p className="text-sm text-muted-foreground">@gruposdotelegram</p>
                </div>
                <div>
                  <strong className="text-sm">Horário de Atendimento:</strong>
                  <p className="text-sm text-muted-foreground">Segunda a Sexta, 9h às 18h</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ReportarProblema;