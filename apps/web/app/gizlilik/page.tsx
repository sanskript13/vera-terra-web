export default function GizlilikPage() {
    return (
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
            <div className="mx-auto max-w-2xl">
                <h1 className="text-4xl font-bold tracking-tight text-foreground">
                    Gizlilik Politikası
                </h1>
                <p className="mt-6 text-sm text-muted-foreground">
                    Son güncelleme: {new Date().toLocaleDateString('tr-TR')}
                </p>
                <div className="prose prose-lg mt-8">
                    <p>[Gizlilik politikası içeriği eklenecek]</p>
                </div>
            </div>
        </div>
    )
}
