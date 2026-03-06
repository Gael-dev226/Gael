"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { InputGroup, InputGroupAddon, InputGroupText, InputGroupTextarea } from "@/components/ui/input-group"

const CATEGORIES = ["Premier League", "La Liga", "Bundesliga", "Serie A", "Champions League", "African Football", "Women's Football"]

const formSchema = z.object({
    titre: z.string().min(5, "Le titre doit contenir au moins 5 caractères.").max(100, "Le titre ne doit pas dépasser 100 caractères."),
    auteur: z.string().min(2, "Le nom de l'auteur doit contenir au moins 2 caractères."),
    categorie: z.string().min(1, "Veuillez sélectionner une catégorie."),
    contenu: z.string().min(20, "Le contenu doit contenir au moins 20 caractères.").max(5000, "Le contenu ne doit pas dépasser 5000 caractères."),
})

export function Form() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: { titre: "", auteur: "", categorie: "", contenu: "" },
    })

    function onSubmit(data: z.infer<typeof formSchema>) {
        toast("Article publié avec succès !", {
            description: (
                <pre className="mt-2 w-[320px] overflow-x-auto rounded-md bg-code p-4 text-code-foreground">
                    <code>{JSON.stringify(data, null, 2)}</code>
                </pre>
            ),
            position: "bottom-right",
        })
    }

    return (
        <Card className="w-full sm:max-w-xl">
            <CardHeader>
                <CardTitle>Créer un article</CardTitle>
                <CardDescription>Remplissez les champs pour publier un nouvel article sur le blog.</CardDescription>
            </CardHeader>

            <CardContent>
                <form id="create-blog-form" onSubmit={form.handleSubmit(onSubmit)}>
                    <FieldGroup>


                        <Controller name="titre" control={form.control} render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                                <FieldLabel htmlFor="blog-titre">Titre</FieldLabel>
                                <Input {...field} id="blog-titre" placeholder="Ex : Liverpool remporte la Premier League" autoComplete="off" aria-invalid={fieldState.invalid} />
                                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                            </Field>
                        )} />

                        <Controller name="auteur" control={form.control} render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                                <FieldLabel htmlFor="blog-auteur">Auteur</FieldLabel>
                                <Input {...field} id="blog-auteur" placeholder="Ex : John Smith" autoComplete="off" aria-invalid={fieldState.invalid} />
                                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                            </Field>
                        )} />


                        <Controller name="categorie" control={form.control} render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                                <FieldLabel htmlFor="blog-categorie">Catégorie</FieldLabel>
                                <select {...field} id="blog-categorie" className="select w-full border rounded-md px-3 py-2 text-sm bg-background">
                                    <option value="">Sélectionner une catégorie</option>
                                    {CATEGORIES.map((cat) => <option key={cat} value={cat}>{cat}</option>)}
                                </select>
                                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                            </Field>
                        )} />


                        <Controller name="contenu" control={form.control} render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                                <FieldLabel htmlFor="blog-contenu">Contenu</FieldLabel>
                                <InputGroup>
                                    <InputGroupTextarea {...field} id="blog-contenu" placeholder="Rédigez le contenu de votre article..." rows={7} className="min-h-32 resize-none" aria-invalid={fieldState.invalid} />
                                    <InputGroupAddon align="block-end">
                                        <InputGroupText className="tabular-nums">{field.value.length}/5000 caractères</InputGroupText>
                                    </InputGroupAddon>
                                </InputGroup>
                                <FieldDescription>Décrivez l'article en détail. Minimum 20 caractères.</FieldDescription>
                                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                            </Field>
                        )} />

                    </FieldGroup>
                </form>
            </CardContent>

            <CardFooter>
                <Field orientation="horizontal">
                    <Button type="button" variant="outline" onClick={() => form.reset()}>Réinitialiser</Button>
                    <Button type="submit" form="create-blog-form">Publier →</Button>
                </Field>
            </CardFooter>
        </Card>
    )
}