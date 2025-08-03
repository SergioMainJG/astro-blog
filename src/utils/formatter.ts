export class Formatter {
    static formatDate(value: Date): string {
        return Intl.DateTimeFormat('es-ES', {
            year: 'numeric',
            month: 'long',
            day: '2-digit'
        }).format(new Date(value));
    }
}