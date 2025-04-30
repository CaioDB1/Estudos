class Evento:
    def metodo_instancia(self):
        return ("método de instância chamado", self)
    
    @classmethod
    def metodo_classe(cls):
        return ("método de classe chamado", cls)
    
    @staticmethod
    def metodo_estatico():
        return "estático chamado"
    
ev = Evento()
a = ev.metodo_instancia() # Evento.metodo_instancia